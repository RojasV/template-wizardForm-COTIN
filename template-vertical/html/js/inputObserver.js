class InputObserver {

    constructor() {

        this.radioInputs = document.querySelectorAll("input[type='radio']")
        this.questonarioPendenciasElement = document.querySelector('.questionario-pendencias')
        this.pendenciasElement = document.querySelector('.pendencias')
        this.embasamentosLegaisElement = document.querySelector('.embasamentos-legais')
        this.questaoITCDElement = document.querySelector('.questao-itcd')
        this.questaoImposicaoMulta = document.querySelector('.questao-imposicao-multa')
        this.pendeciasPainel = document.querySelector('.panel-collapse')
        this.embasamentosPainel = document.querySelector('.panel-collapse-embasamentos')
        
             
        this.getRadioValue()

    }

    getRadioValue() {

        let radioValue = null

        this.radioInputs.forEach(input => {
            input.addEventListener('change', e => {

                radioValue = e.target.value

                console.log(radioValue)

                this.setViewByRadioValue(radioValue)
            })
        })
    }

    setViewByRadioValue(param) {

        if (!param) {
            return false
        } else {

            switch (param) {
                case 'icms':

                    console.log(this.questonarioPendenciasElement)

                    this.pendenciasElement.style.display = 'none'
                    this.embasamentosLegaisElement.style.display = 'none'
                    this.questaoITCDElement.style.display = 'none'
                    this.questonarioPendenciasElement.style.display = 'flex'

                    break;

                case 'itcd':

                    console.log('mostrar div do itcd')

                    this.pendenciasElement.style.display = 'none'
                    this.embasamentosLegaisElement.style.display = 'none'
                    this.questonarioPendenciasElement.style.display = 'none'
                    this.questaoITCDElement.style.display = 'flex'

                    break;

                case 'sim':

                    console.log('mostrar acordion pendencias')

                    this.pendenciasElement.style.display = 'block'
                    this.pendeciasPainel.classList.add('in')
                    this.embasamentosLegaisElement.style.display = 'none'
                   
                    break;

                case 'não':

                    console.log('esconder acordion pendencias')

                    this.pendenciasElement.style.display = 'none'
                    this.embasamentosLegaisElement.style.display = 'block'

                    break;

                case 'sim-itcd':

                    console.log('exibir questao de imposição de multa')

                    this.embasamentosLegaisElement.style.display = 'block'
                    this.embasamentosPainel.classList.add('in')
                    this.questaoImposicaoMulta.style.display = 'none'
                    
                    break;

                case 'não-itcd':

                    console.log('esconder questao de imposição de multa')

                    this.questaoImposicaoMulta.style.display = 'block'
                    this.embasamentosLegaisElement.style.display = 'none'

                    break;

                case 'não-imposicao':

                    console.log('exibir embasamentos legais')

                    this.embasamentosLegaisElement.style.display = 'block'
                    this.embasamentosPainel.classList.add('in')

                    break;

                case 'sim-imposicao':

                    console.log('exibir embasamentos legais')

                    this.embasamentosLegaisElement.style.display = 'block'
                    this.embasamentosPainel.classList.add('in')

                    break;

                default:
                    break;
            }
        }
    }

    teste() {
        this.embasamentosLegaisElement.style.display = 'block'
        this.pendeciasPainel.classList.remove('in')
        this.embasamentosPainel.classList.add('in')
    }
}

window.app = new InputObserver()
let inputObserver = new InputObserver()