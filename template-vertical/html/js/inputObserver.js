class InputObserver {

    constructor() {

        this.radioInputs = document.querySelectorAll("input[type='radio']")
        this.radioInputsCollection = [...this.radioInputs]

        this.questonarioPendenciasElement = document.getElementsByClassName('questionario-pendencias')
        this.questonarioPendenciasElementCollection = [...this.questonarioPendenciasElement]

        this.pendenciasElement = document.getElementsByClassName('pendencias')
        this.pendenciasElementCollection = [...this.pendenciasElement]

        this.embasamentosLegaisElement = document.getElementsByClassName('embasamentos-legais')
        this.embasamentosLegaisCollection = [...this.embasamentosLegaisElement]

        this.questaoITCDElement = document.getElementsByClassName('questao-itcd')
        this.questaoITCDElementCollection = [...this.questaoITCDElement]

        this.questaoImposicaoMulta = document.getElementsByClassName('questao-imposicao-multa')
        this.questaoImposicaoMultaCollection = [...this.questaoImposicaoMulta]

      
        this.getRadioValue()

    }

    getRadioValue() {

        let radioValue = null

        this.radioInputsCollection.forEach(input => {
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

                    console.log(this.questonarioPendenciasElementCollection)

                    this.pendenciasElementCollection[0].style.display = 'none'
                    this.embasamentosLegaisCollection[0].style.display = 'none'
                    this.questaoITCDElement[0].style.display = 'none'
                    this.questonarioPendenciasElementCollection[0].style.display = 'flex'

                    break;

                case 'itcd':

                    console.log('mostrar div do itcd')

                    this.pendenciasElementCollection[0].style.display = 'none'
                    this.embasamentosLegaisCollection[0].style.display = 'none'
                    this.questonarioPendenciasElementCollection[0].style.display = 'none'
                    this.questaoITCDElement[0].style.display = 'flex'

                    break;

                case 'sim':

                    console.log('mostrar acordion pendencias')

                    this.pendenciasElementCollection[0].style.display = 'block'
                    this.embasamentosLegaisCollection[0].style.display = 'block'

                    break;

                case 'não':

                    console.log('esconder acordion pendencias')

                    this.pendenciasElementCollection[0].style.display = 'none'
                    this.embasamentosLegaisCollection[0].style.display = 'block'

                    break;

                case 'sim-itcd':

                    console.log('exibir questao de imposição de multa')

                    this.questaoImposicaoMultaCollection[0].style.display = 'block'

                    break;

                case 'não-itcd':

                    console.log('esconder questao de imposição de multa')

                    this.questaoImposicaoMultaCollection[0].style.display = 'none'

                    break;

                case 'não-imposicao':

                    console.log('exibir embasamentos legais')

                    this.embasamentosLegaisCollection[0].style.display = 'block'

                    break;

                case 'sim-imposicao':

                    console.log('exibir embasamentos legais')

                    this.embasamentosLegaisCollection[0].style.display = 'block'

                    break;

                default:
                    break;
            }
        }
    }
}

window.app = new InputObserver()