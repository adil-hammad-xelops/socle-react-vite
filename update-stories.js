#!/usr/bin/env node

// Script to update all Storybook stories to disable parameters except Interactive and add code display

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const storiesDir = 'src/stories';
const storyFiles = glob.sync(`${storiesDir}/*.stories.tsx`);

// Standard parameters to add to non-Interactive stories
const disabledParameters = `    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        docs: {
            source: {
                code: \`{{CODE_PLACEHOLDER}}\`
            }
        }
    },`;

// Function to extract the render function code for the source
function extractRenderCode(renderFunction) {
    // Extract just the JSX return from the render function
    const match = renderFunction.match(/return\s*\(([\s\S]*?)\);?\s*$/);
    if (match) {
        return match[1].trim();
    }
    return renderFunction;
}

// Process each story file
storyFiles.forEach(filePath => {
    if (filePath.includes('Welcome.stories') ||
        filePath.includes('Overview.stories') ||
        filePath.includes('ControlsTest.stories')) {
        console.log(`Skipping ${filePath} - documentation story`);
        return;
    }

    console.log(`Processing ${filePath}...`);

    let content = fs.readFileSync(filePath, 'utf8');

    // Find all story exports (except Interactive)
    const storyPattern = /export const (\w+): Story = \{([\s\S]*?)\};/g;
    let match;
    let updatedContent = content;

    while ((match = storyPattern.exec(content)) !== null) {
        const storyName = match[1];
        const storyContent = match[2];

        // Skip Interactive stories and Default stories
        if (storyName === 'Interactive' || storyName === 'Default') {
            continue;
        }

        // Check if story already has parameters with disabled controls
        if (storyContent.includes('controls: {disable: true}')) {
            continue;
        }

        // Extract render function for code display
        const renderMatch = storyContent.match(/render: \(\) => \(([\s\S]*?)\),?/);
        if (renderMatch) {
            const renderCode = renderMatch[1].trim();
            const cleanCode = renderCode
                .replace(/\s+/g, ' ')
                .replace(/\{['"]/g, '{\\\"')
                .replace(/['"]\}/g, '\\\"}');

            const updatedParameters = disabledParameters.replace('{{CODE_PLACEHOLDER}}', cleanCode);

            // Check if story has any parameters
            if (storyContent.includes('parameters:')) {
                // Update existing parameters
                const existingParams = storyContent.match(/parameters:\s*\{([\s\S]*?)\},?\s*$/);
                if (existingParams) {
                    const newParams = `parameters: {
        controls: {disable: true},
        actions: {disable: true},
        docs: {
            source: {
                code: \`${cleanCode}\`
            }
        }
    },`;
                    updatedContent = updatedContent.replace(match[0],
                        match[0].replace(/parameters:\s*\{[\s\S]*?\},?/, newParams));
                }
            } else {
                // Add new parameters
                const storyEnd = storyContent.lastIndexOf('}');
                const beforeEnd = storyContent.substring(0, storyEnd).trim();
                const newStoryContent = `${beforeEnd.endsWith(',') ? beforeEnd : beforeEnd + ','}\n    ${updatedParameters}\n}`;
                updatedContent = updatedContent.replace(match[0],
                    `export const ${storyName}: Story = {\n${newStoryContent};`);
            }
        }
    }

    // Write updated content back to file
    if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`✅ Updated ${filePath}`);
    } else {
        console.log(`⏭️  No changes needed for ${filePath}`);
    }
});

console.log('✅ All story files processed!');
