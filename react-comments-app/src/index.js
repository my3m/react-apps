import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'

const users = []
for(var i = 0; i < 10; i++) {
    users.push(
        {
            'name':faker.name.findName(),
            'avatar':faker.image.avatar(),
            'xtime': faker.date.past(),
            'comment' : faker.lorem.sentence()
        });
}

const App = () => {
    return (
        <Fragment>
        <span>{faker.random.number()}</span>
        <div className="ui container comments">
            {
                users.map((u, index)=>  {
                    return (
                        <ApprovalCard key={index}>
                            <CommentDetail name={u.name} avatar={u.avatar} xtime="7:05 PM" comment={u.comment} />
                        </ApprovalCard>
                    );
                })
            }  
        </div>
        </Fragment>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"));