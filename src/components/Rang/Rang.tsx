interface Rang {
    value: number,
    text: string,
    color: string
}
const Rating = ({ value, text, color }:Rang) => {
    return (
      <div className='rating'>
        <span>
          <i
            style={{ color }}
            className={
              value >= 1
                ? 'fa-solid fa-user'
                : value >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 2
                ? 'fas fa-star'
                : value >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 3
                ? 'fas fa-star'
                : value >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 4
                ? 'fas fa-star'
                : value >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 5
                ? 'fa-solid fa-user'
                : value >= 4.5
                ? 'fa-solid fa-user'
                : 'fa-solid fa-user'
            }
          ></i>
        </span>
        <span>{text && text}</span>
      </div>
    )
  }
  
  Rating.defaultProps = {
    color: '#f8e825',
  }
  
  export default Rating
  