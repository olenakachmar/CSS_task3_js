const formValidation = {
  init: () => {
    const button = document.getElementById('submitButton');
    const form = document.getElementById('form');
    const inputs = Array.from(document
        .getElementsByClassName('main__subscribe-form-input'));

    form.oninput = function() {
      const check = inputs.every((el) => ifGreaterThanZero(el.value.length));

      check ?
        button.classList.remove('disabled')
        : button.classList.add('disabled');
    };

    function ifGreaterThanZero(num) {
      return num > 0;
    }
  },
};

export default formValidation;
