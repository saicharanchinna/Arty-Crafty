import "./ArtsPageComponent.scss";
import SidemenuComponent from "../../shared/components/sidemenu/SidemenuComponent";
import {useCallback, useState} from "react";
import CheckBoxComponent from "../../shared/components/core/checkbox/CheckboxComponent";
import {CommonService} from "../../shared/services";
import _ from "lodash";
import FilePreviewComponent from "../../shared/components/core/file-previewer/filePreviewerComponent";
interface ArtsPageComponentProps {

}

const categoryList:any =[
    {
        title: 'Pencil Art',
        code: 'pencil_art',
    },
    {
        title: 'Oil Paintings',
        code: 'oil_paintings',
    },
    {
        title: 'Sketch Art',
        code: 'sketch_art',
    },
    {
        title: 'Watercolor Art',
        code: 'watercolor_art',
    },
]

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

const ArtsPageComponent = (props: ArtsPageComponentProps) => {

    const [selectedCategories,setSelectedCategories] = useState<any>([]);
    const [artsForDisplay,setArtsForDisplay]=  useState<any>(artsForSale);

    const handleCategorySelection = useCallback((isChecked: boolean, category: any) => {
        const updatedCategoryList = _.cloneDeep(selectedCategories);
        if (isChecked) {
            updatedCategoryList.push(category);
        } else {
            updatedCategoryList.splice(updatedCategoryList.findIndex(function (item: any) {
                return item === category;
            }), 1);
        }
        setSelectedCategories(updatedCategoryList);
    }, [selectedCategories]);

    return (
        <div className={'arts-page-component'}>
            <div className={'menu-list'}>
                <div className={'menu-list-title'}>
                    Categories
                </div>
                {
                    categoryList.map((category:any)=>{
                        return (
                            <div className={'menu-item'} key={CommonService.getUUID()}>
                                <CheckBoxComponent
                                    checked={selectedCategories.includes(category.code)}
                                    labelText={category.title}
                                    value={category.code}
                                    onChange={(isChecked: boolean) => {
                                        handleCategorySelection(isChecked,category.code);
                                    }
                                    }
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className={'arts-catalog-display'}>
                {
                    artsForDisplay.map((art:any)=>{
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
                                        />
                                )
                            })
                        }
                    )
            </div>
        </div>
    );

};

export default ArtsPageComponent;