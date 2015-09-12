var express = require('express');
var router = express.Router();
var Crime = require('../../app/models/Crime');

var displayErrorsIfAny = function (err, res) {
    if (err) {
        res.send(err);
    }
};

var setCrime = function (crime, req) {
    crime.title = req.body.title;
    crime.description = req.body.description;
    crime.latLong = [req.body.lat, req.body.long];
    crime.author = null;
    crime.type = null;
    crime.source = null;
    crime.confirmations = 0;
    crime.eventDate = Date.now();
    return crime;
};


router.get('/', function (req, res) {
    Crime.find(function (err, crimes) {
        displayErrorsIfAny(err, res);
        res.json(crimes);
    });
})
    .get('/:id', function (req, res) {
        Crime.findById(req.params.id, function (err, crime) {
            displayErrorsIfAny(err, res);
            res.json(crime);
        });
    })
    .post('/', function (req, res) {
        var crime = setCrime(new Crime(), req);
        crime.save(function (err) {
            displayErrorsIfAny(err, res);
            res.json({message: "Crime reported"})
        });

    })
    .put('/:id', function (req, res) {
        Crime.findById(req.params.id, function (err, crime) {
            displayErrorsIfAny(err, res);
            crime = setCrime(crime, req);
            crime.save(function (err) {
                displayErrorsIfAny(err, res);
                res.json({message: 'Crime updated'});
            });

        })
    }).delete('/:id', function (req, res) {
        Crime.remove({_id: req.params.id}, function (err, crime) {
            displayErrorsIfAny(err, res);
                res.json({message: 'Crime Successfully deleted'});
        });
    });


module.exports = router;
