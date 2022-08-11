import {extend} from 'vee-validate';
import {confirmed, email, max, min, required} from 'vee-validate/dist/rules';
import {ValidationProvider} from 'vee-validate';

export default{
    components:{
        ValidationProvider
    }
   
};
//adicionando regras
extend('positive', value=> {
    return value >0;
})

