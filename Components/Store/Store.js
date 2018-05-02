import { extendObservable } from "mobx";
import axios from 'axios';

import laila from '../../images/laila.jpg';

class myStore {
    constructor() {
        extendObservable(this, {
          apicategories : [],
          questions : [
              {
                id: 1,
                question: 'لماذا تطير الطيور في السماء؟',
                category: 'علم الطيور',
                numberOfAnswers: '37',
                answers: ['لأنه طير', 'لأن لديه جناحان'],
                bestAnswerProfileName: '',
                bestAnswerProfileTitle: '',
                bestAnswerProfilePic: '',
                bestAnswer: '',
              },
              {
                id: 2,
                question: 'لماذا يعيش السمك في الماء؟',
                category: 'علوم البحار',
                numberOfAnswers: '8',
                answers: ['عشان يتنفس', 'لأنه سمك', 'لا أعلم', 'مادري'],
                bestAnswerProfileName: 'ليلى الكندري',
                bestAnswerProfileTitle: 'بروفيسور رياضيات',
                bestAnswerProfilePic: laila,
                bestAnswer: 'عشان يتنفس',
              },
              {
                id: 3,
                question: 'ولماذا الإثنين قبل الثلاثاء؟',
                category: 'فلسفة',
                numberOfAnswers: '3',
                answers: ['لأنه سمك', 'لا أعلم', 'مادري'],
                bestAnswerProfileName: '',
                bestAnswerProfileTitle: '',
                bestAnswerProfilePic: '',
                bestAnswer: '',
              },
              {
                id: 4,
                question: 'لماذا نحن هنا؟',
                category: 'فلسفة',
                numberOfAnswers: '3',
                bestAnswerProfileName: 'ليلى الكندري',
                bestAnswerProfileTitle: '',
                bestAnswerProfilePic: '',
                bestAnswer: '',
              },
          ],
        })
    }

    fetchCategories() {
      return axios.get('http://192.168.100.168/api/category_list/')
            .then(res => res.data)
            .then(categories => {
              this.apicategories = categories;
              console.log(this.apicategories);
            })
            .catch(err => console.error(err));
          }

    getQuestionByID(id) {
      return this.questions.find(question => question.id == id);
    }

    getCategoryByID(id) {
      return this.categories.find(category => category.id == id);
    }
  }

  const Store =  new myStore()
  Store.fetchCategories();

  export default Store;
