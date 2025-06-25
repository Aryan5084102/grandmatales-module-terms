import { useState } from 'react';
import Terms from '../page/Terms';
import FAQ from '../page/FAQ'; 
import OptOut from '../page/OptOut'; 

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('Terms');

    // Function to render the correct component based on the activeTab state
    const renderContent = () => {
        switch (activeTab) {
            case 'Terms':
                return <Terms />;
            case 'FAQ':
                return <FAQ />;
            case 'OptOut':
                return <OptOut />;
            default:
                return <Terms />; // Fallback to Terms
        }
    };

    return (
        <div>
            <nav className="flex gap-4 py-3 px-5">
                {/* Each button now sets the activeTab state */}
                <button
                    onClick={() => setActiveTab('Terms')}
                    className={activeTab === 'Terms' ? 'text-[#D4AF37] font-bold rounded-[8px]' : 'text-[#4B2E39] rounded-[8px]'}
                >
                    Terms
                </button>
                <button
                    onClick={() => setActiveTab('FAQ')}
                    className={activeTab === 'FAQ' ? 'text-[#D4AF37] font-bold rounded-[8px]' : 'text-[#4B2E39] rounded-[8px]'}
                >
                    FAQ
                </button>
                <button
                    onClick={() => setActiveTab('OptOut')}
                    className={activeTab === 'OptOut' ? 'text-[#D4AF37] font-bold rounded-[8px]' : 'text-[#4B2E39] rounded-[8px]'}
                >
                    Opt Out
                </button>
            </nav>

            {/* Render the content based on the active tab */}
            <div className="tab-content px-5 py-3">
                {renderContent()}
            </div>
        </div>
    );
};

export default TabsComponent;