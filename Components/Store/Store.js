import { extendObservable } from "mobx";
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import laila from '../../images/laila.jpg';

class myStore {
  constructor() {
    extendObservable(this, {
      currentUser : AsyncStorage.getItem("currentUser"),
      token : AsyncStorage.getItem("token"),
      error : [],
      username : "",
      firstname: "",
      lastname: "",
      email: "",
      password : "",

      categories : [],
      apiquestions : [],
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

  register() {
    return axios.post('http://127.0.0.1:8000/api/register/', {
      username: this.username,
      email: this.email,
      password: this.password,
    })
    .then(res => res.data)
    .then(() => {
      this.resetForm();
    })
    .catch(err => {
      Object.entries(err.response.data).forEach(
        ([errType, errList]) =>
          this.error = this.error.concat(errList.map(
            message => <p key={errType+message}><strong>{errType}:</strong> {message}</p>
          ))
        );
      });
  }

  signin() {
    console.log('Hi')
    return axios.post('http://127.0.0.1:8000/api/login/', {
      username: this.username,
      password: this.password,
    })
    .then(res => res.data)
    .then(({username, token}) => {
      AsyncStorage.setItem("currentUser", username);
      AsyncStorage.setItem("token", token);
      this.currentUser = username;
      this.token = token;
      this.resetForm();
      // console.log(this.currentUser);
      // console.log(this.token);
    })
    .catch(err => {
      Object.entries(err.response.data).forEach(
        ([errType, errList]) =>
          this.error = this.error.concat(errList.map(
            message => <p key={errType+message}><strong>{errType}:</strong> {message}</p>
          ))
        );
      });
  }

  logout() {
    AsyncStorage.removeItem("currentUser");
    AsyncStorage.removeItem("token");
    this.currentUser = null;
    this.token = null;
  }

  resetForm() {
    console.log("here")
    this.error = [];
    this.username = "";
    this.password = "";
  }

  get isLoggedIn() {
    return !!this.token;
  }

  fetchCategories() {
    // return axios.get('http://127.0.0.1:8000/api/category_list/')
    //   .then(res => res.data)
    //   .then(categories => {
    //     this.categories = categories;
    //   })
    //   .catch(err => console.error(err));
      }

          // fetchCategories() {
          //   return axios.get('http://127.0.0.1:8000/api/category_list/')
          //         .then(res => res.data)
          //         .then(
          //           categories => {
          //             categories.forEach(
          //               category => this.fetchQuestions(category.questions)
          //                 .then(questions => {
          //                   category.questions = questions;
          //                 })
          //             )
          //             this.categories = categories;
          //           }
          //         )
          //         .catch(err => console.error(err));
          //       }

    fetchQuestions(questionsUrl) {
      return axios.get(questionsUrl)
            .then(res => res.data)
            .then(questions => {
              this.apiquestions = questions;
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
