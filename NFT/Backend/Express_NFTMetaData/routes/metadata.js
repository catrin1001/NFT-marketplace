var express = require('express');
var router = express.Router();

NFT_Metadata = { "metadata": [
  {
    "ID": "1",
    "data": {
      "title": "Sad woman",
      "type": "object",
      "properties": {
          "name": {
              "type": "string",
              "description": "A picture of a art"
          },
          "description": {
              "type": "string",
              "description": "a mysterious piece of art"
          },
          "image": {
              "type": "string",
              "description": "https://static01.nyt.com/images/2021/08/15/fashion/TEEN-NFTS--fewocious/merlin_193103526_0e21192f-51f9-4f99-9389-c9aaaf858d09-mobileMasterAt3x.jpg"
          }
      },
    }
  },
  {
    "ID": "2",
    "data": {
      "title": "Composite Art",
      "type": "object",
      "properties": {
          "name": {
              "type": "string",
              "description": "A picture of a art"
          },
          "description": {
              "type": "string",
              "description": "a mysterious piece of art"
          },
          "image": {
              "type": "string",
              "description": "https://www.cnet.com/a/img/j6P5vh5F0Si8n-pvnVn5o6DNK3I=/940x0/2021/03/23/e3692e0f-3460-448f-840e-9673ecf26c50/dfh-dissolvingly.jpg"
          }
      }
    }
  }
]}

router.get('/:id', function(req, res, next) {
  result = {};
  for(data of NFT_Metadata.metadata) {
    if(data.ID == req.params.id) {
      result = data.data;
    }
  }
  res.send(result);
});

module.exports = router;
