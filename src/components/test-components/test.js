                var handleGetResponse = response => {
                    return response.json()
                };
                var logData = function(data){
                    const resultArray = [];
                    var key = null;
                    for (key in data){
                        resultArray.push(data[key]);
                        this.users = resultArray;
                    }
                };
                var logSingleData = function (data) {
                    this.users.push(data);
                };

                this.$http.get('').then(handleGetResponse).then(logData)

                this.resource.getData({node: this.node}).then(handleGetResponse).then(logSingleData);



                //                this.$http.post('', objectToSend)
//                    .then(serverResponse, errorHandler)
//                this.resource.save({node: this.node}, objectToSend)
                //this.resource.saveAlt(objectToSend)



