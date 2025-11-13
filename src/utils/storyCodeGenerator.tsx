// Utility for generating dynamic code in Interactive Storybook stories
import React from 'react';

export interface CodeGeneratorProps {
    componentName: string;
    args: Record<string, any>;
    defaultValues?: Record<string, any>;
    excludeProps?: string[];
    children?: string;
    customPropsRenderer?: (args: Record<string, any>) => string[];
}

export const generateComponentCode = ({
                                          componentName,
                                          args,
                                          defaultValues = {},
                                          excludeProps = [],
                                          children,
                                          customPropsRenderer
                                      }: CodeGeneratorProps): string => {
    const props: string[] = [];

    if (customPropsRenderer) {
        props.push(...customPropsRenderer(args));
    } else {
        // Generate props automatically
        Object.entries(args).forEach(([key, value]) => {
            // Skip excluded props and children prop
            if (excludeProps.includes(key) || key === 'children') return;

            // Skip if value matches default
            if (defaultValues[key] !== undefined && defaultValues[key] === value) return;

            // Skip undefined, null, or empty string values
            if (value === undefined || value === null || value === '') return;

            // Format different prop types
            if (typeof value === 'boolean') {
                if (value) props.push(key);
            } else if (typeof value === 'string') {
                props.push(`${key}="${value}"`);
            } else if (typeof value === 'number') {
                props.push(`${key}={${value}}`);
            } else if (Array.isArray(value)) {
                props.push(`${key}={${JSON.stringify(value)}}`);
            } else if (typeof value === 'object') {
                props.push(`${key}={${JSON.stringify(value)}}`);
            }
        });
    }

    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    const childrenContent = children || args.children || '';

    if (childrenContent) {
        return `<${componentName}${propsString}>${childrenContent}</${componentName}>`;
    } else {
        return `<${componentName}${propsString} />`;
    }
};

export const CodeDisplayComponent: React.FC<{
    code: string;
    title?: string;
}> = ({code, title = 'Generated Code:'}) => {
    return (
        <div style={{
            backgroundColor: '#f7fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '1rem'
        }}>
            <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#4a5568'
            }}>
                {title}
            </div>
            <pre style={{
                margin: 0,
                fontFamily: 'Monaco, Menlo, monospace',
                fontSize: '13px',
                backgroundColor: '#2d3748',
                color: '#e2e8f0',
                padding: '0.75rem',
                borderRadius: '4px',
                overflow: 'auto',
                whiteSpace: 'pre-wrap'
            }}>
        {code}
      </pre>
            <button
                onClick={() => navigator.clipboard.writeText(code)}
                style={{
                    marginTop: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: '#3182ce',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2c5aa0'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
            >
                📋 Copy Code
            </button>
        </div>
    );
};

export const InteractiveStoryWrapper: React.FC<{
    children: React.ReactNode;
    code: string;
    title?: string;
}> = ({children, code, title}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            {/* Component Preview */}
            <div style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                width: 'fit-content',
                minWidth: '280px'
            }}>
                {children}
            </div>

            {/* Generated Code */}
            <CodeDisplayComponent code={code} title={title}/>
        </div>
    );
};
