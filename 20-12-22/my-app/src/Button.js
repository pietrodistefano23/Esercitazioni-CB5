const buttonVariantMap = {
    primary: 'text-xl color-pink',
    secondary: 'text-sm color-red'
  }

export function Button(props){
    console.log("props di button" ,props );

    const { 
        className = '',
        children = 'Non ho {children}',
        variant = 'none',
        ...otherAttributes
      } = props;
    
    return(
        <button
          className={`${variant} ${className}`}
          {...otherAttributes}
      >
        {children}
      </button>
  );
}



