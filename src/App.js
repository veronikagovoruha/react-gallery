import { Component } from 'react';
import ImageGallery from 'modules/ImageGallery';
import Searchbar from 'modules/Searchbar';
import { searchImages } from "./shared/services/getImages"
import Button from 'modules/Button';
import Modal from 'shared/components/Modal';
import Loader from 'shared/components/Loader';

// import {PixabayApi} from './shared/services/getImages'

export default class App extends Component{
    state = {
        images: [],
        search: "",
        page: 1,
        loading: false,
        totalHits: 0,
        modalOpen: false,
        modalContent: {},
        buttonText: "Load more"
    }

    componentDidUpdate(prevProps, prevState){
        const  { search, page } = this.state;
        if (page > prevState.page || search !== prevState.search) {
            this.fetchPosts();
        }
    }

    async fetchPosts(){
        this.setState({
            loading: true
        })
        const { search, page, images } = this.state;
        try {
            const data = await searchImages(search, page);
            const hits = page === 1 ? data.hits : [...images, ...data.hits]
            this.setState(() => {
                return { 
                    totalHits: data.totalHits,
                    images: hits
                }
            })
        } catch(error) {
            console.log('error')
            this.setState({
                error: error
            })
        } finally {
            this.setState({ loading:false})
        }
    }

    canLoadMore = () =>{
        const {images, totalHits, loading} = this.state;
        return !loading && totalHits !== 0 && images.length < totalHits;
    }


    changeSearch = ({search}) =>{
        this.setState({
            search,
            page: 1
        })
    }

    changePage = () =>{
        this.setState(({page})=>{
            return{
                page: page + 1
            }
        })
    }

    showModal = (modalContent) =>{
        this.setState({
            modalOpen: true,
            modalContent
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen:false
        })
    }

    render(){
        const {changeSearch, changePage, canLoadMore, closeModal, showModal} = this;
        const {images, loading, modalOpen, modalContent: {largeImageURL}, buttonText} = this.state;
        return (
            <>
                {modalOpen && 
                    <Modal close={closeModal}>
                        <img src={largeImageURL} alt="" width="900"/>
                    </Modal>
                }
               <Searchbar onSubmit={changeSearch}/>
               <ImageGallery images={images} onImageClick={showModal}/> 
               {canLoadMore() && <Button onClick={changePage} buttonText={buttonText}/>} 
               {loading && <Loader />}
            </>
        )
    }
}
