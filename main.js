window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButonOnScrol()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quias dados vou precisar?

  // topo da linha
  const sectionTop = section.offsetTop
  //altura da linha
  const sectionHeight = section.offsetHeight
  //O topo ultrapassou a linha alvo?
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  // Qual o tamanho inteiro da seção - topo + altura
  const sectionEndsAt = sectionTop + sectionHeight
  //A base ultrapassou a linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //Limites da seção

  //*O if precisa de dois verdadeiros*//
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  //selecionando id para adicionar a classe
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  //Removendo e adicionando classe active
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButonOnScrol() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#sesvices,
#services header,
#services .card,
#about,
#about header,
about .content`)
