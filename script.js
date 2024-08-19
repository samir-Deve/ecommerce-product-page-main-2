/* header menue btton starts */
const headerBtn = document.querySelector(".page-log-mobile-size-menue .mobile-size-menue");

const MobileSizeMenue = document.querySelector(".logo-nav-links .desktop-size-nav-links");

function handleMenueBtn() {
	headerBtn.classList.toggle("clicked");
	MobileSizeMenue.classList.toggle("is-mobile-sized")
}

window.addEventListener("resize", ()=> {
	if(window.innerWidth > 850 && MobileSizeMenue.classList.contains("is-mobile-sized")) {
		handleMenueBtn()
	}
})

headerBtn.addEventListener("click", handleMenueBtn)
/* header menue btton ends */

// Mobile size JS starts
const gallery = document.querySelector(".mobile-size-gallery .gallery")
const scroll_right = document.querySelector(".mobile-size-gallery .scroll-right")
const scroll_left = document.querySelector(".mobile-size-gallery .scroll-left")

let imgWith = 0;
imgWith = gallery.querySelectorAll("img")[0].offsetWidth

window.addEventListener("resize", () => {
	imgWith = gallery.querySelectorAll("img")[0].offsetWidth
})

function handleScroll(btn) {
	if(btn.className === "scroll-left") {
		gallery.scrollLeft -= imgWith
		console.log("left")
	}
	else if(btn.className === "scroll-right") {
		gallery.scrollLeft += imgWith
		console.log("right")
	}
}

scroll_left.addEventListener("click", ()=> {
	handleScroll(scroll_left)
})

scroll_right.addEventListener("click", ()=> {
	handleScroll(scroll_right)
})

// Mobile size JS ends

// Desktop size thumbnail gallery satarts

const thumbnailGalleryImges = document.querySelectorAll(".thumbnail-gallery .gallery .img");

const windowImg = document.querySelector(".desktop-size-gallery .main-img-showcase img");
console.log(windowImg.src)

function DleteExistingClasses() {
	thumbnailGalleryImges.forEach((eachImg) => {
		eachImg.classList.remove("is-active");
		eachImg.children[0].classList.remove("is-showing")
	})
}

function AddClasses(eachImg) {
	eachImg.classList.add("is-active")
	eachImg.children[0].classList.add("is-showing");
	let imgSrc = eachImg.children[0].src.slice(21, 44);
	windowImg.src = "." + imgSrc + ".jpg"
	console.log(eachImg.children[0].src.slice(21, 44))
}

thumbnailGalleryImges.forEach((eachImg) => {
	eachImg.addEventListener("click", () => {
		DleteExistingClasses()
		AddClasses(eachImg)
	})
})

/* Increase & decrease funtion */
const cartCount = document.querySelector(".cart-avatar .cart .cart-icon-cont .cart-count")

const increaseDecreaseCountCont = document.querySelector(".proAddCount-cont");

const decreaseBtn = increaseDecreaseCountCont.querySelector(".pro-decrease-cont");

const increaseBtn = increaseDecreaseCountCont.querySelector(".pro-increase-cont");

const productCount = increaseDecreaseCountCont.querySelector(".added-count")

let cartCountJs = 0;
let CheckoutBtnClicked = false;

function handleCartBtns(btn) {
	if(btn.classList.contains("decrease") && cartCountJs > 0){
		cartCountJs -= 1;
		productCount.innerHTML = cartCountJs;
	}
	else if(btn.classList.contains("increase")){
		cartCountJs += 1;
		productCount.innerHTML = cartCountJs;
	}
	handleCartContent(CheckoutBtnClicked);
}

function handleCartCount() {
	cartCount.innerHTML = cartCountJs;
	if(cartCountJs) {
		CheckoutBtnClicked = true;
	}
	handleCartContent(CheckoutBtnClicked);
	const deleteFromCartBtn = document.querySelector(".check-out-delete-button")
	deleteFromCartBtn.addEventListener("click", deleteFromCart)
}

increaseBtn.addEventListener("click", () => {
	handleCartBtns(increaseBtn);
});

decreaseBtn.addEventListener("click", () => {
	handleCartBtns(decreaseBtn);
})

/* card hide & show functionality */

const cartVisiblity = document.querySelector(".cart .cart-check-out");

const cartIcon = document.querySelector(".cart .cart-icon-cont")

const cartContent = document.querySelector(".cart .cart-check-out .check-out");

const addToCheckOutBtn = document.querySelector(".proAddCount-proAddBtn .proAddBtn-cont");


const cartEmpthyMessage = document.querySelector(".cart .cart-check-out.cart-active .empthy-message");

function deleteFromCart() {
	if(cartCountJs > 0) {
		cartCountJs -= 1;
		if(cartCountJs === 0) {
			CheckoutBtnClicked = false;
			handleCartContent(CheckoutBtnClicked)
		}
		handleCartContent(CheckoutBtnClicked)
		handleCartCount()
		
	}

}

function handleCartContent(btn) {
	if(btn) {
		cartContent.innerHTML = `
              <ul>
                <li class="each-check-out-product">

                  <img src="images/image-product-1-thumbnail.jpg" alt="" class="check-out-img">

                  <div class="check-out-info">
                    <span class="name">
                      Fall Limited Edition Sneackers
                    </span>
                    <div class="each-price-total-price">
                      <span class="each-price">$12.00</span>
                      <span class="total-count">* ${cartCountJs} </span>
                      <span class="total-price">$${(cartCountJs * 12.00).toFixed(2)}</span>
                    </div>
                  </div>

                  <button class="check-out-delete-button">
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                  </button>

                </li>
              </ul>
              <button class="cart-check-out-btn">Checkout</button>
		`}
	else if(!btn) {
		cartContent.innerHTML = `
		 <div class="empthyMsgCont">
		 	<p class="empthy-message">Your cart is empthy</p>
		 </div>
		`
	}
}
handleCartContent(CheckoutBtnClicked)
cartIcon.addEventListener("click", () => {
	cartVisiblity.classList.toggle("cart-active")
})

addToCheckOutBtn.addEventListener("click", () => {
	handleCartCount()
})







