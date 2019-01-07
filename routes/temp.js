dishRouter.route('/:dishId/comments/:commentId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Dishes.findById(req.params.dishId)
    .populate('comments.author')
    .then((dish) => {
        if (dish != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish.comments);
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null) {
            req.body.author = req.user._id;
            dish.comments.push(req.body);
            dish.save()
            .then((dish) => {
                Dishes.findById(dish._id)
                .populate('comments.author')
                .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(dish);
                })            
            }, (err) => next(err));
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes/'
        + req.params.dishId + '/comments');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null) {
            for (var i = (dish.comments.length -1); i >= 0; i--) {
                dish.comments.id(dish.comments[i]._id).remove();
            }
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));    
});
5c31c77fd18e2a52ac63edec




eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzI3NDhlNWViMmY0ZDc1MTRkZTUwZDQiLCJpYXQiOjE1NDY4MjAzODQsImV4cCI6MTU0NjgyMzk4NH0.foC5N-EprUFd3SULTNO3AbBn-Fv-ZxAjob5MH-q1nlk

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzI3NDhlNWViMmY0ZDc1MTRkZTUwZDQiLCJpYXQiOjE1NDY4MjMzMDcsImV4cCI6MTU0NjgyNjkwN30.57EmUJ-4BFgZXzZNDobJt17ezR9RG0pV9PcLXc3Wj9o

5c31c77fd18e2a52ac63edec

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzI3NDhlNWViMmY0ZDc1MTRkZTUwZDQiLCJpYXQiOjE1NDY4MjM4NDksImV4cCI6MTU0NjgyNzQ0OX0.F7xNmflvitlJ77gJtV6rx-w-WlDQ-RKpkloihXuBH2Q

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzI3NDhlNWViMmY0ZDc1MTRkZTUwZDQiLCJpYXQiOjE1NDY4MjQwODYsImV4cCI6MTU0NjgyNzY4Nn0.bpAdFea7tzPZL32AWR3mfTypn7gheyiU6m9es_yDC9E

5c31c77fd18e2a52ac63eded

"5c31c77fd18e2a52ac63edee"

"5c31c77fd18e2a52ac63edef"