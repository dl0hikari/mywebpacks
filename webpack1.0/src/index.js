import './app/assets/css/main.scss';
import $ from 'jquery';

$(function(){
    // const img = document.createElement('img');
    // img.src = './assets/img/杂志效果图_03.jpg';
    // document.appendChild(img);

});


class MathC {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    console.log(descriptor)
    const oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}

const math = new MathC();

// passed parameters should get logged now
math.add(2, 4);


let app = {};
app.components = {
  sass: require('@components/sass')
};

export default app;
