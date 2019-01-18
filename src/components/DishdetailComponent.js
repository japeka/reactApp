import React from 'react';
import {Card, CardImg, CardText,CardBody, CardTitle} from 'reactstrap';

    function RenderDish({dish}) {
          return (
            <Card>
              <CardImg top width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                 <CardTitle>{dish.name}</CardTitle>
                 <CardText>{dish.description}</CardText>  
              </CardBody>
            </Card>
          );
    }

    function RenderComments({comments}) {
       if(comments.length > 0) {
            const _comments = comments.map((comment) => {
                let time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))); 
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {time}
                        </li>
                   </ul>
                );
            });
            return _comments;
        } else {
            return (
                <ul></ul>
            );
        }
    }

    const DishDetail = (props) => {
        const dish = props.selectedDish; 
        if(dish!=null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>{props.selectedDish.comments.length >  0 ? 'Comments' : '' }</h4>
                            <RenderComments comments={props.selectedDish.comments} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;