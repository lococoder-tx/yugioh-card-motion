import { forwardRef, useImperativeHandle, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CardProps {
  variant: string
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
  frontOnly?: boolean
  image: string
}

export interface PlayingCardRef {
  handleModalClose: () => void
}

export const PlayingCard = forwardRef<PlayingCardRef, CardProps>(
  ({ image, variant, onClick, frontOnly = false }, ref) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
      setIsSelected(true)
      if (onClick) onClick()
    }

    const handleModalClose = () => {
      setIsSelected(false)
    }

    useImperativeHandle(ref, () => ({
      handleModalClose,
    }))

    if (!frontOnly)
      return (
        <div
          onClick={handleClick}
          className={`group relative w-[400px] h-[600px] [perspective:150rem] hover:cursor-pointer`}
        >
          <div
            className={`card__side bg-white border border-black border-opacity-50 transition-transform duration-[700ms] ${
              isSelected
                ? '[transform:rotateY(-180deg)]'
                : 'group-hover:[transform:rotateY(-180deg)]'
            }`}
          >
            <div className={`bg-cover bg-center h-full bg-yugioh-pattern-back`}>
              &nbsp;
            </div>
          </div>
          <div
            className={`card__side border border-black border-opacity-20 transition-transform duration-[700ms] ${
              isSelected
                ? '[transform:rotateY(0deg)]'
                : '[transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]'
            } bg-cover ${
              variant === '1'
                ? `bg-yugioh-pattern-bewd`
                : variant === '2'
                ? 'bg-yugioh-pattern-magician'
                : 'bg-yugioh-pattern-exodia'
            }`}
          />
        </div>
        // <div
        //   onClick={handleClick}
        //   className="group relative w-[400px] h-[600px] [perspective:150rem] hover:cursor-pointer"
        // >
        //   <div className="card__side bg-white border border-black border-opacity-50 group-hover:[transform:rotateY(-180deg)]">
        //     <div className={`bg-cover bg-center h-full bg-yugioh-pattern-back`}>
        //       &nbsp;
        //     </div>
        //   </div>
        //   <div
        //     className={`card__side border border-black border-opacity-20 [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] bg-cover ${
        //       variant === '1'
        //         ? `bg-yugioh-pattern-bewd`
        //         : variant === '2'
        //         ? 'bg-yugioh-pattern-magician'
        //         : 'bg-yugioh-pattern-exodia'
        //     }`}
        //   />
        // </div>
      )

    return (
      <div
        ref={ref}
        onClick={onClick}
        className="group relative w-[400px] h-[600px] [perspective:150rem]"
      >
        <img
          src={image}
          className={`card__side border border-black border-opacity-20 object-cover`}
        />
      </div>
    )
  }
)
