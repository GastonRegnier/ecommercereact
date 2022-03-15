import Item from "./Item";



function ItemList() {
    const productos = [
        { titulo: 'GLC Coupe', texto: 'Robusta desde cualquier punto de vista', foto: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNYFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtxyOtsd2sDcUfp8fXGEuiRJ0l34rOB2NQcbApjkoI5uVcZQC31MTkzNwTVm7jA7mhKV50F%25vqCrayLRz3RYaxPXWrH1eMRn8wsQcoiZUMdM4FnIwTg9ovn6PDMSoSeWzKStsd7vVcUfK8yXGE4ymJ0lgorOB2PS5bApet9I5usQJQC3UkTkzNGLwm7j0amhKVBHE%25vqNt9yLRiO6Yax4JOroYhfldombAp7oMIkb1ECQmILArkzNetDm7jCeShKVzYV%25vq7rcyLRaGfYaxH08rH18Cln8wioyoiZ4MIM4zuA1YtEWpTuP9pGFAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650', fotodos: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNYFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtxyOtsd2sDcUfp8fXGEuiRJ0l34rOB2NQcbApjkoI5uVcZQC31MTkzNwTVm7jA7mhKV50F%25vqCrayLRz3RYaxPXWrH1eMRn8wsQcoiZUMdM4FnIwTg9ovn6PDMSoSeWzKStsd7vVcUfK8yXGE4ymJ0lgorOB2PS5bApet9I5usQJQC3UkTkzNGLwm7j0amhKVBHE%25vqNt9yLRiO6Yax4JOroYhfldombAp7oMIkb1ECQmILArkzNetDm7jCeShKVzYV%25vq7rcyLRaGfYaxH08rH18Cln8wioyoiZ4MIM4zuA1YtEWpTuP9pGFAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1530,750),gravity=Center;Resize,width=650', fototres: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNYFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtxyOtsd2sDcUfp8fXGEuiRJ0l34rOB2NQcbApjkoI5uVcZQC31MTkzNwTVm7jA7mhKV50F%25vqCrayLRz3RYaxPXWrH1eMRn8wsQcoiZUMdM4FnIwTg9ovn6PDMSoSeWzKStsd7vVcUfK8yXGE4ymJ0lgorOB2PS5bApet9I5usQJQC3UkTkzNGLwm7j0amhKVBHE%25vqNt9yLRiO6Yax4JOroYhfldombAp7oMIkb1ECQmILArkzNetDm7jCeShKVzYV%25vq7rcyLRaGfYaxH08rH18Cln8wioyoiZ4MIM4zuA1YtEWpTuP9pGFAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650' },
        { titulo: 'La Nueva GLA', texto: 'Tan activo como vos. La nueva GLA es el acompañante ideal para un estilo de vida polifacético.', foto: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaWFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyItsd2sDcUfp8fXGEuiRJ0l3IrOB2NS1bApRnyI5ux5xQC30CQkzNBPKm7jAyvhKV5XN%25vq4t9yLRgnVYaxPrSrH1enDn8wYOxoiZr7YM4FnTrTg95z36PDCLuSeWzQMtsd8hQcUfiO6XGE4bwJ0lgoJOB2PMnbApet9I5usKxQC3UvWkzNp%25bm7jacShKVHtc%25YhQDd9YIXGE5YrJbXqWBOIJ7GcbApPdRI5ugecQC3AhTkzN5t6m7jdG3hKVvKQ%25vqLUkyLRaA2YaxHoErH18IOn8wiVyoiCpBxySfD2Mpg35x94ZbMFwRPPW3SN9hFNTmj32v2bwbU15zsRG1gdPNYFN&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650', fotodos: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaWFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyItsd2sDcUfp8fXGEuiRJ0l3IrOB2NS1bApRnyI5ux5xQC30CQkzNBPKm7jAyvhKV5XN%25vq4t9yLRgnVYaxPrSrH1enDn8wYOxoiZr7YM4FnTrTg95z36PDCLuSeWzQMtsd8hQcUfiO6XGE4bwJ0lgoJOB2PMnbApet9I5usKxQC3UvWkzNp%25bm7jacShKVHtc%25YhQDd9YIXGE5YrJbXqWBOIJ7GcbApPdRI5ugecQC3AhTkzN5t6m7jdG3hKVvKQ%25vqLUkyLRaA2YaxHoErH18IOn8wiVyoiCpBxySfD2Mpg35x94ZbMFwRPPW3SN9hFNTmj32v2bwbU15zsRG1gdPNYFN&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1530,750),gravity=Center;Resize,width=1300', fototres: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaWFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyItsd2sDcUfp8fXGEuiRJ0l3IrOB2NS1bApRnyI5ux5xQC30CQkzNBPKm7jAyvhKV5XN%25vq4t9yLRgnVYaxPrSrH1enDn8wYOxoiZr7YM4FnTrTg95z36PDCLuSeWzQMtsd8hQcUfiO6XGE4bwJ0lgoJOB2PMnbApet9I5usKxQC3UvWkzNp%25bm7jacShKVHtc%25YhQDd9YIXGE5YrJbXqWBOIJ7GcbApPdRI5ugecQC3AhTkzN5t6m7jdG3hKVvKQ%25vqLUkyLRaA2YaxHoErH18IOn8wiVyoiCpBxySfD2Mpg35x94ZbMFwRPPW3SN9hFNTmj32v2bwbU15zsRG1gdPNYFN&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=1300' },
        { titulo: 'GLB SUV', texto: 'Ya está aquí la nueva GLB. Nuestro SUV compacto más versátil.', foto: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyItsd2sDcUfp8fXGEuiRJ0l3IrOB2NS1bApRnyI5ux5xQC30CQkzNBPKm7jAyvhKV5XN%25vq4t9yLRgLFYaxPoqrH1entn8wYOxoiZr7YM4FnTrTg95z36PDCLuSeWznMtsd7kdcUfi%25kXGE4nXJ0lgorOB2PSFbApe7RI5usKDQC32hOkzNptwm7ja7mhKVHXt%25vq8cXyr%25kWfDrQJ0lCrnOIJRdAbQOK0yI5uemuQC3PS9kzN5%256m7jdlwhKVvsQ%25vqLUayLRanfYaxHbJrH18j%25n8520R%256d9lo24uAyFiwOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=350', fotodos: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyItsd2sDcUfp8fXGEuiRJ0l3IrOB2NS1bApRnyI5ux5xQC30CQkzNBPKm7jAyvhKV5XN%25vq4t9yLRgLFYaxPoqrH1entn8wYOxoiZr7YM4FnTrTg95z36PDCLuSeWznMtsd7kdcUfi%25kXGE4nXJ0lgorOB2PSFbApe7RI5usKDQC32hOkzNptwm7ja7mhKVHXt%25vq8cXyr%25kWfDrQJ0lCrnOIJRdAbQOK0yI5uemuQC3PS9kzN5%256m7jdlwhKVvsQ%25vqLUayLRanfYaxHbJrH18j%25n8520R%256d9lo24uAyFiwOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1530,750),gravity=Center;Resize,width=350', fototres: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyItsd2sDcUfp8fXGEuiRJ0l3IrOB2NS1bApRnyI5ux5xQC30CQkzNBPKm7jAyvhKV5XN%25vq4t9yLRgLFYaxPoqrH1entn8wYOxoiZr7YM4FnTrTg95z36PDCLuSeWznMtsd7kdcUfi%25kXGE4nXJ0lgorOB2PSFbApe7RI5usKDQC32hOkzNptwm7ja7mhKVHXt%25vq8cXyr%25kWfDrQJ0lCrnOIJRdAbQOK0yI5uemuQC3PS9kzN5%256m7jdlwhKVvsQ%25vqLUayLRanfYaxHbJrH18j%25n8520R%256d9lo24uAyFiwOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=350' },
        { titulo: 'Clase G', texto: 'Un diseño que lo dice todo', foto: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtByStsdB%25ycJtTjqNJMYax4JOroYfV8nMreacoiZGk1M4F0swTg9BmO6PDdhoSeWfQ9tsdEGDcUfl0yXGEDGRJ0lW6xOB2dzqbApfoyI5uEz2QC3hgFkzN%252nm7jscfhKVUX9%25vq7rjyLRKJmYaxvOqrH1LbOn8waYcoiZXkpM4FNQQTg9jIe6PDTLmSeW6lWtsdTcdcUfqOcXGERnwJ0lbHVOB2MB5bApdrCI5gZ8lXhRjwQZtewPKUuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650', fotodos: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtByStsdB%25ycJtTjqNJMYax4JOroYfV8nMreacoiZGk1M4F0swTg9BmO6PDdhoSeWfQ9tsdEGDcUfl0yXGEDGRJ0lW6xOB2dzqbApfoyI5uEz2QC3hgFkzN%252nm7jscfhKVUX9%25vq7rjyLRKJmYaxvOqrH1LbOn8waYcoiZXkpM4FNQQTg9jIe6PDTLmSeW6lWtsdTcdcUfqOcXGERnwJ0lbHVOB2MB5bApdrCI5gZ8lXhRjwQZtewPKUuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1530,750),gravity=Center;Resize,width=1300', fototres: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtByStsdB%25ycJtTjqNJMYax4JOroYfV8nMreacoiZGk1M4F0swTg9BmO6PDdhoSeWfQ9tsdEGDcUfl0yXGEDGRJ0lW6xOB2dzqbApfoyI5uEz2QC3hgFkzN%252nm7jscfhKVUX9%25vq7rjyLRKJmYaxvOqrH1LbOn8waYcoiZXkpM4FNQQTg9jIe6PDTLmSeW6lWtsdTcdcUfqOcXGERnwJ0lbHVOB2MB5bApdrCI5gZ8lXhRjwQZtewPKUuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=1300' },
        { titulo: 'Clase C Coupe', texto: 'No dejes nunca de superarte', foto: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyItsd2HtcUfp8qXGEubSJ0l3IrOB2NW5bApjtwI5uxoMQC31MjkzNwL6m7jA6ohKV5Kh%25vqCu%25yLRzYXYaxPXWrH1eJtn8ws8WoiZUkXM4FGTJTg9ozZ6PDMcoSeWTnutsd6cTcUfK86XGEvTSJ0lgYhOB2PBqbApedlI5usQYQC3UkTkzNGLnm7j0afhKVHtc%25YhQDd9YIXGE5YrJbXqWBOIJ7G%25bApPkyI5ugfaQC3AgrkzN5P6m7jCGohKVzYt%25vqEaHyLRacXYaxHaJrH18Bln8wiA4oiZ46NM4FgTwTg9hQ36PKNCZnX2f3SNsh8HG2DkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650', fotodos: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyItsd2HtcUfp8qXGEubSJ0l3IrOB2NW5bApjtwI5uxoMQC31MjkzNwL6m7jA6ohKV5Kh%25vqCu%25yLRzYXYaxPXWrH1eJtn8ws8WoiZUkXM4FGTJTg9ozZ6PDMcoSeWTnutsd6cTcUfK86XGEvTSJ0lgYhOB2PBqbApedlI5usQYQC3UkTkzNGLnm7j0afhKVHtc%25YhQDd9YIXGE5YrJbXqWBOIJ7G%25bApPkyI5ugfaQC3AgrkzN5P6m7jCGohKVzYt%25vqEaHyLRacXYaxHaJrH18Bln8wiA4oiZ46NM4FgTwTg9hQ36PKNCZnX2f3SNsh8HG2DkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1530,750),gravity=Center;Resize,width=650', fototres: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyItsd2HtcUfp8qXGEubSJ0l3IrOB2NW5bApjtwI5uxoMQC31MjkzNwL6m7jA6ohKV5Kh%25vqCu%25yLRzYXYaxPXWrH1eJtn8ws8WoiZUkXM4FGTJTg9ozZ6PDMcoSeWTnutsd6cTcUfK86XGEvTSJ0lgYhOB2PBqbApedlI5usQYQC3UkTkzNGLnm7j0afhKVHtc%25YhQDd9YIXGE5YrJbXqWBOIJ7G%25bApPkyI5ugfaQC3AgrkzN5P6m7jCGohKVzYt%25vqEaHyLRacXYaxHaJrH18Bln8wiA4oiZ46NM4FgTwTg9hQ36PKNCZnX2f3SNsh8HG2DkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=1300' },
    ]

    const getPromesa = new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
            setTimeout(() => { resolve(productos) }, 3000);
        } else {
            reject('Error - *404');
        }
    })







    return (

        <>

            <Item getPromesa={getPromesa} />

        </>
    )





}



export default ItemList