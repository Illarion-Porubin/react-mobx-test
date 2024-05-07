import { observer } from "mobx-react-lite";
// import { Counter } from "../components/counter/Counter";
// import CounterStore from "../store/counter.store";
// import postsStore from "../store/posts-store";
import React from "react";
import { spy } from "mobx";
import { useStores } from "../root-store-context";

spy((ev) => {
  // console.log(ev);
  if(ev.type === "action"){
    console.log(ev);
  }
})

// const couneter1 = new CounterStore();
// const couneter2 = new CounterStore();

export const Wrapper = observer(() => {
  // const { getPostsAction, posts } = postsStore; /// если есть глобальный стор, то можно убрать другие импорты
  const { post: {getPostsAction, posts} } = useStores()

  React.useEffect(() => {
    getPostsAction();
  }, [])

  // if(posts?.state === "pending") {
  //   return <div>loading</div>
  // }

  // if(posts?.state === "rejected") {
  //   return <div>error</div>
  // }

  if(!posts) {
    return null
  }

  return posts.case({
    pending: () => <div>Loading</div>,
    rejected: () => <div>Loading</div>,
    fulfilled: (value) => (
      // console.log(value)
      <ul>
        {
          value.map((item, i: number) => {
            return <li key={i}>{item.body}</li>
          })
        }
      </ul>
    )
  })


  // return (
  //   <>
  //     <Counter {...couneter1} total={couneter1.total}/>
  //     <Counter {...couneter2} total={couneter2.total}/>
  //     {posts?.value[0].body}
  //   </>
  // );
});
