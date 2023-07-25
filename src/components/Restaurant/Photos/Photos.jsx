import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotoCollection from './PhotoCollection';

function Photos() {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/8/10128/ece0dc65aa1922c03210cf64ea511f12.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/10128/b20d6719ccbb916c797983515950cf52.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/10128/411224d38ba6807b9e37475971515f57.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/10128/87f2737abeb1f1127ba08ef2f230d294.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/3/6506233/65a148809fd71c15e43acf4e41eed11a.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/2/18569092/1846711831cb0258f8acc85e712ff1ff.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/7/10007/cae7b0707bccff3e8db831ab72683f4f.jpg",
    "https://b.zmtcdn.com/data/pictures/7/10007/e2866fbe511c3de0733d2cba45223456.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/7/10007/15096de1dcc63a2abd7a61903c92a998.jpg",
    "https://b.zmtcdn.com/data/pictures/7/10007/5cc7426118f9314e30a8069b577696d8.jpg",
    "https://b.zmtcdn.com/data/pictures/7/10007/06a895e8017a07360feef3d9693343a4.jpg",
    "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwRm9vZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626266798999-aa2b0c520cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1559203244-78de52adba0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1609540969455-ad5ea19be121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fEluZGlhbiUyMEZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxJbmRpYW4lMjBGb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage} />
        ))}
      </div>
    </>
  )
}

export default Photos
