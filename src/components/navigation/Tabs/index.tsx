import {ReactNode, useState} from 'react';
import {Box, Tab, Tabs as MuiTabs} from '@mui/material';
import {TabPanel, TabsContainer} from './Tabs.styled';

interface TabItem {
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
}

interface TabsProps {
    tabs: TabItem[];
    defaultTab?: number;
    variant?: 'standard' | 'scrollable' | 'fullWidth';
    orientation?: 'horizontal' | 'vertical';
    onChange?: (index: number) => void;
}

const Tabs = ({
                  tabs,
                  defaultTab = 0,
                  variant = 'standard',
                  orientation = 'horizontal',
                  onChange,
              }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        onChange?.(newValue);
    };

    return (
        <TabsContainer>
            <Box sx={{borderBottom: orientation === 'horizontal' ? 1 : 0, borderColor: 'divider'}}>
                <MuiTabs
                    value={activeTab}
                    onChange={handleChange}
                    variant={variant}
                    orientation={orientation}
                    scrollButtons="auto"
                    aria-label="tabs"
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            icon={tab.icon}
                            disabled={tab.disabled}
                            iconPosition="start"
                        />
                    ))}
                </MuiTabs>
            </Box>

            {tabs.map((tab, index) => (
                <TabPanel
                    key={index}
                    role="tabpanel"
                    hidden={activeTab !== index}
                    id={`tabpanel-${index}`}
                >
                    {activeTab === index && <Box sx={{p: 3}}>{tab.content}</Box>}
                </TabPanel>
            ))}
        </TabsContainer>
    );
};

export default Tabs;

