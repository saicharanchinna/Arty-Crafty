import "./PreviousArtsComponent.scss";
import ArtImageComponent from "../../../shared/components/art-image/ArtImageComponent";
import DialogComponent from "../../../shared/components/core/dialog/dialogComponent";
import {useCallback, useState} from "react";
import ButtonComponent from "../../../shared/components/core/button/ButtonComponent";
import FilePreviewComponent from "../../../shared/components/core/file-previewer/filePreviewerComponent";

interface PreviousArtsComponentProps {

}

const previousArts = [
    {
        id: 1,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 2,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 3,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 4,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 5,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 6,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 7,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },
    {
        id: 8,
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
    },


]


const PreviousArtsComponent = (props: PreviousArtsComponentProps) => {
    const [showAttachmentPreviewDialog, setShowAttachmentPreviewDialog] = useState(false);
    const [currentAttachmentFile, setCurrentAttachmentFile] = useState<any | undefined>(undefined);

    const handleAttachmentPreviewOpen = useCallback((attachment: any) => {
        setShowAttachmentPreviewDialog(true);
        setCurrentAttachmentFile(attachment);
    }, []);

    return (
        <div className={'previous-arts-component-wrapper'}>
            {
                previousArts?.map((art: any) => {
                    return (
                        <div className={'previous-image-wrapper'} onClick={() => {
                            handleAttachmentPreviewOpen(art)
                        }}>
                            <FilePreviewComponent
                                key={art.id}
                                attachmentFileName={art.attachmentFileName}
                                attachmentUrl={art.attachmentUrl}
                                height={400}
                                width={300}
                                isFile={false}
                                options={false}
                            />
                        </div>
                    )
                })
            }
            <DialogComponent
                maxWidth={'md'}
                open={showAttachmentPreviewDialog}
                className={"attachment-preview-dialog"}
                onClose={() => setShowAttachmentPreviewDialog(false)}>
                <div className="attachment-preview-dialog-header">
                    <div className="attachment-preview-dialog-title">
                        Attachment Preview
                    </div>
                </div>
                <div className="attachment-preview-dialog-body">
                    <ArtImageComponent
                        attachmentUrl={currentAttachmentFile?.attachmentUrl}
                        height={400}
                        width={400}
                        isFile={false}
                        options={false}
                    />
                </div>
                <div className={'previous-art-dialog-button'}>
                    <ButtonComponent
                        className={'width-70'}
                        handleClick={() => {
                            setShowAttachmentPreviewDialog(false)
                        }}
                        fullWidth={false}
                    >
                        Close
                    </ButtonComponent>
                </div>
            </DialogComponent>
        </div>
    );

};

export default PreviousArtsComponent;