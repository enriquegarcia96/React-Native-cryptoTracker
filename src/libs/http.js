class Http {
    static instance = new Http();

    get = async ( url  ) =>{
        try {
            let req = await fetch(url);
            let json = await req.json();
            return json;
        } catch (error) {
            console.log('http get methon err', error);
            throw Error(error);
        }
    }

    post = async ( url, body )  =>{
        try {

            let req = await fetch(url, {
                method: 'POST',
                body
            });

            let json = await req.json();
            return json;
        } catch (error) {
            console.log('http method post error ',error);
            throw Error(error);
        }
    }

    put = async ( url, body )  =>{
        try {

            let req = await fetch(url, {
                method: 'PUT',
                body
            });

            let json = await req.json();
            return json;
        } catch (error) {
            console.log('http method put error ',error);
            throw Error(error);
        }
    }

    delete = async ( url, body )  =>{
        try {

            let req = await fetch(url, {
                method: 'DELETE',
                body
            });

            let json = await req.json();
            return json;
        } catch (error) {
            console.log('http method delete error ',error);
            throw Error(error);
        }
    }
}

export default Http;