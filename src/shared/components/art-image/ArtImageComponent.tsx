import "./ArtImageComponent.scss";
import FilePreviewComponent from "../core/file-previewer/filePreviewerComponent";

interface ArtImageComponentProps {
    attachmentFileName?: string;
    attachmentFile?: File;
    attachmentUrl?: any;
    height?: number;
    width?: number;
    isFile?: boolean;
    options?:boolean;
}

const ArtImageComponent = (props: ArtImageComponentProps) => {
    let {attachmentFileName, attachmentUrl, height, width, isFile, options} = props;
    if(!attachmentFileName) attachmentFileName ='Name';
    if(!attachmentUrl) attachmentUrl = undefined;
    if(!height) height = 300;
    if(!width) width = 300;
    if(!isFile) isFile = false;
    if(!options) options = false;
    return (
        <div className={'ArtImageComponent'}>
            <FilePreviewComponent
                attachmentUrl={attachmentUrl}
                attachmentFileName={attachmentFileName}
                isFile={false}
                options={options}
                height={height}
                width={width}
           />
        </div>
    );

};

export default ArtImageComponent;