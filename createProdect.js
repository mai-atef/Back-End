const form = document.getElementById('productForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
    
      const productName = document.querySelector('.product_name').value.trim();
      const productPrice = parseFloat(document.querySelector('.product_price').value.trim());
     const productDescription = document.querySelector('.product_description').value.trim();
    
      if (!productName || isNaN(productPrice) || !productDescription ){
        alert('Please fill all the fields and ensure the price and quantity are valid numbers.');
        return;
      }

      const data = {
        product_name: productName,
        product_price: productPrice,
       product_description: productDescription
       
      };

      fetch('/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if(data){
            window.location.href = '/product/create';
        }
       
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });