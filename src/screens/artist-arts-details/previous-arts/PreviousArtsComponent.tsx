import "./PreviousArtsComponent.scss";
import {useCallback, useState} from "react";
import FilePreviewComponent from "../../../shared/components/core/file-previewer/filePreviewerComponent";

interface PreviousArtsComponentProps {

}

const previousArts = [
    {
        id: 1,
        artistName: 'charan',
        attachmentFileName: 'sai',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false,
        price: 'RS. 100',
    },
    {
        id: 2,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },
    {
        id: 3,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },
    {
        id: 4,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },
    {
        id: 5,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },
    {
        id: 6,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },
    {
        id: 7,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },
    {
        id: 8,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: false
    },


]


const PreviousArtsComponent = (props: PreviousArtsComponentProps) => {


    return (
        <div className={'previous-arts-component-wrapper'}>
            {
                previousArts?.map((art: any) => {
                    return (
                            <FilePreviewComponent
                                key={art.id}
                                attachmentUrl={art.attachmentUrl}
                                attachmentFileName={art.name}
                                attachmentFile={art}
                                artistName={art.artistName}
                                artDescription={art.artDescription}
                                price={art.price}
                                forSale={art.forSale}
                                height={400}
                                width={300}
                                isFile={false}
                                options={false}
                                profilePage={true}
                            />
                    )
                })
            }
        </div>
    );

};

export default PreviousArtsComponent;