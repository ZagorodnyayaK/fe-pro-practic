export default class {
  constructor() {
    // TEMPLATE
    // 1 init all variables and find all elements
    const COUNT_LIMIT = 10;
    const headerWrapper = document.querySelector('.header-wrapper');

    const onClickHandler = (e) => {
      // if () {
      //   // onGetPostClick
      // } else if () {
      //   // onShowCommentsClick
      // }
    };

    // 2 function
    const onGetPostClick = () => {
      // isPostIdValid
      // getPostById
      // renderPost
    };

    const isPostIdValid = () => {};

    const getPostById = async () => {};

    const renderPost = () => {};

    const onShowCommentsClick = () => {
      // getCommentsPostById
      // renderComments
    };

    const getCommentsPostById = async () => {};

    const renderComments = () => {};

    // 3 attach event listeners
    headerWrapper.addEventListener('click', onClickHandler);

    this.timer = setInterval(() => {}, 60000);
  }

  update() {
    // will check later
  }

  destroy() {
    // clear interval/timers
    // remove dom
    // clear event listeners
    // abort all fetches
  }
}
