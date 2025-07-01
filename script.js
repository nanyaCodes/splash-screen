document.addEventListener('DOMContentLoaded', function() {   
            AOS.init({        
                duration: 1000,        
                easing: 'ease-in-out',        
                once: false,        
                mirror: false         
            });    
            
            const splashScreen = document.getElementById('splashScreen');    
            const loadingContainer = document.getElementById('loadingContainer');        
            
            // Hide loading container after progress completes (if it exists)    
            if (loadingContainer) {
                setTimeout(() => {        
                    loadingContainer.style.opacity = '0';    
                }, 3500);
            }
                   
            function transitionToMainContent() {        
                const splashScreen = document.getElementById('splashScreen');        
                const mainContent = document.getElementById('mainContent');                    
                
                // Add fade out animation to splash screen        
                splashScreen.classList.add('fade-out');                     
                
                // After fade out completes, hide splash and show main content        
                setTimeout(() => {            
                    splashScreen.classList.add('hidden');            
                    mainContent.classList.remove('hidden');            
                    mainContent.classList.add('fade-in');            
                }, 800);  
            }        
            
            // Set timer to transition after 7 seconds        
            setTimeout(transitionToMainContent, 7000);        
            
            // Allow users to click to skip splash screen        
            splashScreen.addEventListener('click', transitionToMainContent);
});



tailwind.config = {
    theme: {
        extend: {
            colors: {
                'dark-brown': '#3e2723',
                'cream-black': '#2C2C2C'
            },
            animation: {
                'float': 'float 2s ease-in-out infinite',
                'float-delayed': 'float 2s ease-in-out 2s infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-fast': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        }
     }
}

