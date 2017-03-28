< promise 알기>
- http://programmingsummaries.tistory.com/325 참조
- http://honeybunnys.blog.me/220763495425 참조
- http://horajjan.blog.me/220922964473 참조
- 어떤 작업을 요청하면서 콜백 함수를 등록하면, 작업이 수행되고 나서 결과를 나중에 콜백함수를 통하여 알려주는 식이다.
  콜백 지옥에 빠지지 않기위하여 오래 전부터 promise 라는 패턴이 제안되어 왔다. promise패턴을 사용하면 비동기 작업들이
  순차적으로 진행하거나, 병렬로 진행하는등의 컨트롤리 보다 수월해지고 코드의 가독성이 좋아진다.

- Promise는 특정 함수 호출이나 연산이 비동기로 이루어져서 앞으로 완료되었을 때, 이후에 처리할 함수나 에러를 처리하기 위한
  함수를 설정하는 오브젝트입니다

- Promise object는 new를 통해 initiate될 수 있으며, 함수를 패스받을 수 있다.
  이 함수에는 resolve, reject함수가 매개변수로 차례로 들어가있다.

<generator알기>
- 함수처리 중 임의의 장소에서 처리를 중단 및 재개할 수 있는 방법이며, 일반적으로 코루틴이라고 불린다고 한다.
- 내가 특정 이벤트를 보내주기 전까지 특정 지점에서 코드를 멈춰놓는 개념으로 이해할 수 있다.
  이벤트를 보내주면, 다시 멈추는 지점까지 코드를 실행하고, 이게 '반복' 적으로 실행되면서,
- 비동기작업을 동기적으로 구현할 수 있도록 도와준다.

- 함수 선언 시 function* 표시는 포인터같은게 절대 아니고.. 이 함수가 제네레이터 함수로 선언된 것이다  라는 것을 명시하는 문법이다.
  그리고 제너레이터라는 개념이 실행/중단을 반복하는 코루틴 개념이라고 했었는데,
  실행하는 도중 중단 지점을 설정하는 방법이 yield 키워드이다.

<redux-saga>
- https://medium.freecodecamp.com/async-operations-using-redux-saga-2ba02ae077b3#.bwa39uvuz 참조
- http://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga 참조
- http://start.jcolemorrison.com/react-and-redux-sagas-authentication-app-tutorial-part-2/ 참조

<side effects>
- Redux saga expose several methods called Effects, we are going to define several of them:

•Fork performs a non-blocking operation on the function passed.
•Take pauses until action received.
•Race runs effects simultaneously, then cancels them all once one finishes.
•Call runs a function. If it returns a promise, pauses the saga until the promise is resolved.
•Put dispatches an action.
•Select Runs a selector function to get data from the state
•takeLatest means we are going to execute the operations, then return only the results of the last one call.
 If we trigger several cases, it’s going to ignore all of them except the last one.
•takeEvery will return results for all the calls triggered.
