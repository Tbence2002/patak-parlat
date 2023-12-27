import React, { useState, useEffect } from 'react'
import "./Home.css"
import { storage } from './Firebase'
import { ref, uploadBytes, listAll, getDownloadURL, getStorage, deleteObject} from 'firebase/storage'
import { v4 } from 'uuid'
import toast, { Toaster } from 'react-hot-toast';
import {motion} from 'framer-motion'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

function MyGallery() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "patak-parlat/");
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `patak-parlat/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
                toast.success('Sikeres képfeltöltés!');
            })
        });
    };
    const deleteImage = (urlToDelete) => {
        const storage = getStorage();
      
        const imageRef = ref(storage, urlToDelete);
      
        deleteObject(imageRef)
          .then(() => {
            setImageList((prev) => prev.filter((url) => url !== urlToDelete));
            toast.success('Kép sikeresen törölve!');
          })
          .catch((error) => {
            toast.error('Hiba történt a kép törlése során!');
            console.error(error);
          });
      };
    useEffect(() => {
        listAll(imageListRef).then((response) => {
            const promises = response.items.map((item) => {
                return getDownloadURL(item);
            });
            Promise.all(promises).then((urls) => {
                setImageList(urls);
            });
        });
    }, [imageList]);
    
    return (
        <motion.div className='gallery-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
        }}>
            <div className='gallery-content'>
                <h2>Feltölthet új képeket a galériába</h2>
                <div className='add-image'>
                    <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                    <button onClick={uploadImage}>Feltöltés</button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
                <div className='arrow-down'>
                    <i>↓</i>
                    <p>Képek megtekintése</p>
                </div>
            </div>
            <div className='image-container'>
            {imageList.map((url) => {
          return <div className='image'>
            <Gallery>
              <Item
                original={url}
                thumbnail={url}
                width="1024"
                height="768">
                {({ ref, open }) => (
                    <div className='gallery-show-content'>
                        <img ref={ref} onClick={open} src={url} alt="kép"/>
                        <button onClick={() => deleteImage(url)}>Törlés</button>
                    </div>
                )}
              </Item>
            </Gallery>
          </div>;
        })}
            </div>
        </motion.div>
    )
}

export default MyGallery