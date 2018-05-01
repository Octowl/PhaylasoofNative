import { extendObservable } from "mobx";
import laila from '../images/laila.jpg';


class Store {
    constructor() {
        extendObservable(this, {
          QuestionObject : [
              {
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
                question: 'لماذا نحن هنا؟',
                category: 'فلسفة',
                numberOfAnswers: '3',
                bestAnswerProfileName: 'ليلى الكندري',
                bestAnswerProfileTitle: '',
                bestAnswerProfilePic: '',
                bestAnswer: '',
              },
          ]
        })
    }
}


export default new Store()
