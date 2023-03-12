import "./filePreviewerComponent.scss";

import React, {useCallback, useEffect, useState} from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import DialogComponent from "../dialog/dialogComponent";
import ButtonComponent from "../button/ButtonComponent";
// import {ImageConfig} from "../../../constants";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Tooltip} from "@mui/material";
import TooltipComponent from "../../tooltip/tooltipComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {CommonService} from "../../../services";
import {useDispatch} from "react-redux";
import {setArtistDetails} from "../../../../store/actions/artist.action";

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
    options?: boolean;
    price?: string;
    forSale?: boolean;
    artistName?: string;
    artDescription?: string;
    profilePage?:boolean;
}

const FilePreviewComponent = (props: FilePreviewComponentProps) => {

    let {
        attachmentFile,
        attachmentUrl,
        isFile,
        options,
        height,
        width,
        forSale,
        price,
        artistName,
        artDescription,
        profilePage
    } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAttachmentPreviewDialog, setShowAttachmentPreviewDialog] = useState(false);

    const handleAttachmentPreviewOpen = useCallback((attachment: any) => {
        setShowAttachmentPreviewDialog(true);
    }, []);
    const [attachmentPreviewUrl, setAttachmentPreviewUrl] = useState<any>();
    const [zoomImage, setZoomImage] = useState<number>(minScale);
    const [rotateImage, setRotateImage] = useState<number>(0);
    // const [isDraggable, setIsDraggable] = useState<boolean>(false);

    if (!height) height = 300;
    if (!width) width = 300;
    if (!profilePage) profilePage=false;

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
                        <div className={'attachment-image-wrapper'}
                             onClick={() => {
                                 handleAttachmentPreviewOpen(attachmentUrl)
                             }}>
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
                        <div className={'attachment-preview-content'}>
                            <div className={'attachment-preview-content-title'}>
                                {
                                    artistName && artistName?.length > 26 ?
                                        <TooltipComponent
                                            placement={'top'}
                                            tooltip={artistName}
                                            arrow={true}
                                        >
                                            <span> {artistName}</span>
                                        </TooltipComponent>
                                        :
                                        <> {artistName}</>
                                }
                            </div>
                            <div className={'attachment-preview-content-description'}>
                                {
                                    artDescription && artDescription?.length > 26 ?
                                        <TooltipComponent
                                            placement={'top'}
                                            tooltip={artDescription}
                                            arrow={true}
                                        >
                                            <span> {artDescription}</span>
                                        </TooltipComponent>
                                        :
                                        <> {artDescription}</>
                                }
                            </div>
                        </div>
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
            <DialogComponent
                maxWidth={'md'}
                open={showAttachmentPreviewDialog}
                disableBackdropClose={true}
                className={"attachment-preview-dialog"}
                onClose={() => setShowAttachmentPreviewDialog(false)}
                isShowCancel={true}
            >
                <div className="attachment-preview-dialog-image-content-wrapper">
                    <div className="attachment-preview-dialog-image">
                        <img height={height}
                             width={width}
                             style={{
                                 transform: `scale(${zoomImage}) rotate(${
                                     rotateImage
                                 }deg)`
                             }}
                             src={attachmentPreviewUrl ? attachmentPreviewUrl : 'Failed to load image'}
                             alt={"Attachment"}
                        />
                    </div>
                    <div className="attachment-preview-dialog-content">
                        <div className="attachment-preview-dialog-content-header">
                            <div className="attachment-preview-dialog-content-header-title">
                                Art By:
                            </div>
                            <div className="attachment-preview-dialog-content-header-title-wrapper">
                                <div className={'attachment-preview-dialog-content-header'}>
                                    {artistName ? artistName : "-"}
                                </div>
                                {
                                    !profilePage &&
                                    <ButtonComponent
                                        variant={'outlined'}
                                        color={'info'}
                                        handleClick={() => {
                                            dispatch(setArtistDetails(10))
                                            navigate(CommonService._routeConfig.ArtistProfileRoute())}
                                        }
                                        endIcon={<AccountCircleOutlinedIcon color={'info'}/>}
                                    >
                                        View Profile
                                    </ButtonComponent>
                                }
                            </div>
                            <div className="attachment-preview-dialog-content-header-title">
                                About Art:
                            </div>
                            <div className={'attachment-preview-dialog-content-header-description'}>
                                {artDescription}
                            </div>
                            {
                                forSale &&
                                <div className="attachment-preview-dialog-content-header-price">
                                    {price}
                                </div>
                            }
                        </div>
                        <div className="attachment-preview-dialog-button">
                            {
                                forSale &&
                                <ButtonComponent
                                    variant={'contained'}
                                    color={'primary'}
                                >
                                    ADD TO BAG
                                </ButtonComponent>
                            }
                        </div>
                        {/*<div className={'previous-art-dialog-button'}>*/}
                        {/*    <ButtonComponent*/}
                        {/*        className={'width-70'}*/}
                        {/*        handleClick={() => {*/}
                        {/*            setShowAttachmentPreviewDialog(false)*/}
                        {/*        }}*/}
                        {/*        fullWidth={false}*/}
                        {/*    >*/}
                        {/*        Close*/}
                        {/*    </ButtonComponent>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </DialogComponent>
        </div>
    );
};

export default FilePreviewComponent;