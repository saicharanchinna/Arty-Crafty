import "./ArtistArtsDetailsComponent.scss";
import TabsWrapperComponent, {TabComponent, TabsComponent,TabContentComponent} from "../../shared/components/core/tabs/tabsComponent";
import {useState} from "react";
import PreviousArtsComponent from "./previous-arts/PreviousArtsComponent";
import ArtsForSaleComponent from "./arts-for-sale/ArtsForSaleComponent";

const PREVIOUS_ARTS = "previous_arts";
const ARTS_TO_SELL = "arts_to_sell";

interface ArtistArtsDetailsComponentProps {

}

const ArtistArtsDetailsComponent = (props: ArtistArtsDetailsComponentProps) => {
    const [activeTab, setActiveTab] = useState<"previous_arts" | "arts_to_sell">(PREVIOUS_ARTS);

    return (
        <div className={'ArtistArtsDetailsComponent'}>
            <div className="details-screen-body">
                <TabsWrapperComponent>
                    <TabsComponent
                        value={activeTab}
                        allowScrollButtonsMobile={false}
                        onUpdate={( v: any) => {
                            setActiveTab(v);
                        }}
                        variant={"fullWidth"}
                    >
                        <TabComponent label="DISPLAY" value={PREVIOUS_ARTS}/>
                        <TabComponent label="FOR SALE" value={ARTS_TO_SELL}/>
                    </TabsComponent>
                    <TabContentComponent
                        selectedTab={activeTab} value={PREVIOUS_ARTS}>
                        <PreviousArtsComponent/>
                    </TabContentComponent>
                    <TabContentComponent
                        selectedTab={activeTab} value={ARTS_TO_SELL}>
                        <ArtsForSaleComponent/>
                    </TabContentComponent>
                </TabsWrapperComponent>
            </div>
        </div>
    );

};

export default ArtistArtsDetailsComponent;