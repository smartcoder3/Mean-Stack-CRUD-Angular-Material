const express = require('express');
const router = express.Router();

var model = require('../models/student.model');

router.route('/students').get((req, res) => {
    model.Student.find((err, students) => {
        if (err)
            console.log(err);
        else
            res.json(students);
    });
});

router.route('/students/:id').get((req, res) => {
    model.Student.findById(req.params.id, (err, student) => {
        if (err)
            console.log(err);
        else
            res.json(student);
    });
});

router.route('/students/add').post((req, res) => {
    let student = new model.Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/students/update/:id').post((req, res) => {
    model.Student.findById(req.params.id, (err, student) => {
        if (!student)
            return next(new Error('Could not load document'));
        else {
            student.name = req.body.name;
            student.regNo = req.body.regNo;
            student.dob = req.body.dob;
            student.class = req.body.class;

            student.save().then(student => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/students/delete/:id').get((req, res) => {
    model.Student.findByIdAndRemove({_id: req.params.id}, (err, student) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})


module.exports = router;