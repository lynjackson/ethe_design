useEffect(()=>{
    
    
    
    
    
    
    
    const swiper = (e)=>{
      // document.getElementById('value-con').style.opacity = 0;
      // console.log(e);
      // e.preventDefault();
      document.getElementById('value-title').style.opacity = 0;
      document.getElementById('value-text').style.opacity = 0;
      setTimeout(()=>(e.changedTouches[0].clientY > swipeDirection) ? setCounter(counter + 1) : setCounter(counter - 1), 500)
      window.removeEventListener('touchend', swiper)
    }
    
    
      window.addEventListener('touchstart', (e)=>{
        setSwipeDirection(e.changedTouches[0].clientY)
      })
      
      window.addEventListener('touchend', swiper)

    
    

  })