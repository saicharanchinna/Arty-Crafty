import "./ArtsForSaleComponent.scss";
import {useCallback, useState} from "react";
import FilePreviewComponent from "../../../shared/components/core/file-previewer/filePreviewerComponent";

interface ArtsForSaleComponentProps {

}

const artsForSale = [
    {
        id: 1,
        artistName: 'charan jkasf jdnsfjkdsf ',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentFileName: 'sai',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 2,
        attachmentFileName: 'sai',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        artistName: 'charan',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 3,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 4,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 5,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 6,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 7,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
    {
        id: 8,
        attachmentFileName: 'sai',
        artistName: 'charan',
        artDescription:'Thbasdhc ychbsudchsd busdhcusdb hcbusdic hsbcusdc',
        attachmentUrl: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        forSale: true,
        price: 'RS. 100',
    },
]

const ArtsForSaleComponent = (props: ArtsForSaleComponentProps) => {
    return (
        <div className={'previous-arts-component-wrapper'}>
            {
                artsForSale?.map((art: any) => {
                    return (
                            <FilePreviewComponent
                                key={art.id}
                                attachmentUrl={art.attachmentUrl}
                                artistName={art.artistName}
                                attachmentFileName={art.attachmentFileName}
                                artDescription={art.artDescription}
                                forSale={art.forSale}
                                price={art.price}
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

export default ArtsForSaleComponent;