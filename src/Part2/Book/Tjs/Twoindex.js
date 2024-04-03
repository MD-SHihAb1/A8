import toast from "react-hot-toast"



export const getWishlist = ()=>{
    let wishlist = []
    let storedWishlist = localStorage.getItem('wishlist')
    if (storedWishlist){
        wishlist = JSON.parse(storedWishlist)
    }

    return wishlist

}


export const saveWishlist = book =>{
    let wish = getWishlist()
    const isExist = wish.find(b =>b.bookId === book.bookId)
    if (isExist) {
        return toast.error('Already Wishlist!')
    }
    wish.push(book)
    localStorage.setItem('wishlist', JSON.stringify(wish))
    toast.success('Wishlist Successfully')
}






