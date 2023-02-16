

/*
if there will be error we won't know which test failed
writing each test separately gives more information
the result of the test and data is not clear
*/
it("Raises x to the power n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

/*
better to write this way
*/

describe("1st right pow algorithm", function() {

    it("Raises 5 to the power of 1", function(){
        assert.equal(pow(5, 1), 5);
    });

    it("Raises 5 to the power of 2", function(){
        assert.equal(pow(5, 2), 25);
    });

    it("Raises 5 to the power of 3", function(){
        assert.equal(pow(5, 3), 125);
    });

});

// or we can write it this way
describe("2nd right pow algorithm", function() {
    function makeTest(x, y){
        let result=1;
        for(let i = 1; i<=y; i++){
            result=result*x;
        }
        it(`Raises ${x} to the power of ${y}`, function(){
            assert.equal(pow(x,y), result);
        });
    }
    for(let i=1; i<=3; i++){
        makeTest(5, i);
    }
})

