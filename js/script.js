// Nav
const navBtn = document.querySelector('.c-nav__btn')
const nav = document.querySelector('.c-nav')
const navUl = document.querySelector('.c-nav__items')
const navItem = document.querySelectorAll('.c-nav__item')
navBtn.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible')
	nav.classList.toggle('hidden')
	if (visibility === 'false') {
		navBtn.setAttribute('aria-expanded', true)
	} else if (visibility === 'true') {
		navBtn.setAttribute('aria-expanded', false)
	}
})

const toggleNavItems = e => {
	navItem.forEach(item => {
		nav.classList.toggle('hidden')
		if (!e.target.classList.contains('c-nav__items')) {
			item.classList.remove('text-mainBlue')
			e.target.classList.add('text-mainBlue')
		}
	})
}
navUl.addEventListener('click', toggleNavItems)
// End of Nav

// Scrollspy
const allSections = document.querySelectorAll('.c-section')
const lastNavItem = navItem[navItem.length - 1]
const handleScrollSpy = () => {
	const sections = []

	allSections.forEach(section => {
		if (window.scrollY <= section.offsetTop + section.offsetHeight) {
			sections.push(section)
			const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
			navItem.forEach(item => {
				item.classList.remove('text-mainBlue')
			})
			activeSection.classList.add('text-mainBlue')
		}

		if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
			navItem.forEach(item => {
				item.classList.remove('text-mainBlue')
			})
			lastNavItem.classList.add('text-mainBlue')
		}
	})
}
window.addEventListener('scroll', handleScrollSpy)
// End of Scrollspy

// Footer
const footerYear = document.querySelector('.c-footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
// End of Footer
