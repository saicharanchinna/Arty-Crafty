import "./filePreviewerComponent.scss";

import React, {useCallback, useEffect, useState} from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
// import {ImageConfig} from "../../../constants";

const minScale = 1;
const maxScale = 3;
const zoomStep = 0.5;

interface FilePreviewComponentProps {
    attachmentFileName?: string;
    attachmentFile?: File;
    attachmentUrl?: any;
    height?: number;
    width?: number;
    isFile?: boolean;
    options?:boolean;
}

const FilePreviewComponent = (props: FilePreviewComponentProps) => {

    let {attachmentFile, attachmentUrl, isFile,options,height,width} = props;

    const [attachmentPreviewUrl, setAttachmentPreviewUrl] = useState<any>();
    const [zoomImage, setZoomImage] = useState<number>(minScale);
    const [rotateImage, setRotateImage] = useState<number>(0);
    // const [isDraggable, setIsDraggable] = useState<boolean>(false);

    if(!height) height = 300;
    if(!width) width =300;

    useEffect(() => {
        setZoomImage(minScale);
        setRotateImage(0);

        if (isFile) {
            if (!attachmentFile) {
                setAttachmentPreviewUrl(undefined)
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setAttachmentPreviewUrl(reader.result);
            };
            if (attachmentFile) {
                reader.readAsDataURL(attachmentFile);
                setAttachmentPreviewUrl(reader.result);
            } else {
                setAttachmentPreviewUrl("");
            }
        } else {
            if (attachmentUrl) {
                setAttachmentPreviewUrl(attachmentUrl);
            }
        }
    }, [attachmentFile, attachmentUrl, isFile]);

    const zoomIn = useCallback(() => {
        const newScale = zoomImage + zoomStep;
        const finalZoomInImage = newScale <= maxScale ? newScale : maxScale
        setZoomImage(finalZoomInImage)
        // setIsDraggable(true)
    }, [zoomImage])

    const zoomOut = useCallback(() => {
        const newScale = zoomImage - zoomStep;
        const finalZoomedOutImage = newScale >= minScale ? newScale : minScale
        setZoomImage(finalZoomedOutImage)
        if (finalZoomedOutImage === minScale) {
            // setIsDraggable(false)
        }
    }, [zoomImage])

    const rotateRight = useCallback(() => {
        const rotate = rotateImage === 270 ? 0 : rotateImage + 90
        setRotateImage(rotate)
    }, [rotateImage])

    const rotateLeft = useCallback(() => {
        const rotate = rotateImage === -270 ? 0 : rotateImage - 90
        setRotateImage(rotate)
    }, [rotateImage]);

    return (
        <div className="file-preview-wrapper component">
            {
                attachmentPreviewUrl && <div className="file-preview-component">
                    <div className="attachment-wrapper">
                        <img height={height}
                             width={width}
                             style={{
                                 transform: `scale(${zoomImage}) rotate(${
                                     rotateImage
                                 }deg)`
                             }}
                             src={attachmentPreviewUrl ? attachmentPreviewUrl : 'Failed to load image'}
                             alt={"Attachment"}/>
                    </div>
                </div>
            }
            {
                options &&
                <div className="attachment-preview-wrapper">
                    <div className="attachment-actions">
                        <div onClick={zoomIn} className="icon"><ZoomInIcon/></div>
                        <div onClick={zoomOut} className="icon"><ZoomOutIcon/></div>
                        <div onClick={rotateLeft} className="icon"><RotateLeftIcon/></div>
                        <div onClick={rotateRight} className="icon"><RotateRightIcon/></div>
                    </div>
                </div>
            }

        </div>
    );
};

export default FilePreviewComponent;