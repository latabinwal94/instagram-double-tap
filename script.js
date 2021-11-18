const clickedArea = document.querySelector('.inner-div')
const clickedCount = document.querySelector('.clicked')
let count = 0

const showHeart = () => {
	let heart = document.createElement('i')
	heart.classList.add('fas')
	heart.classList.add('fa-heart')
	clickedArea.appendChild(heart)
	setTimeout(()=> {
		heart.remove()
	},800)
}

clickedArea.addEventListener('dblclick', () => {
	count++
	clickedCount.innerHTML = count
	showHeart()
})