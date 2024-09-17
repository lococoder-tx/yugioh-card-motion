import React from 'react'
import CoolButton from './CoolButton'

interface CardProps {
  title: string
  features: string[]
  price: number
  variant: '1' | '2' | '3'
}

const Card: React.FC<CardProps> = ({ title, features, price, variant }) => {
  return (
    <div className="group relative w-[200px] h-[400px] lg:w-[400px] lg:h-[600px] [perspective:150rem]">
      <div className="card__side bg-white group-hover:[transform:rotateY(-180deg)]">
        <div
          className={`bg-cover h-[100px] lg:h-[300px] bg-blend-color clip-path-card-picture rounded-t-2xl ${
            variant === '1'
              ? `card__picture--1`
              : variant === '2'
              ? 'card__picture--2'
              : 'card__picture--3'
          }`}
        >
          &nbsp;
        </div>
        <h4 className="absolute top-36 left-1/4 text-center w-max text-2xl uppercase font-light text-white">
          <span
            className={`px-8 py-4 box-decoration-clone ${
              variant === '1'
                ? `card__heading-span--1`
                : variant === '2'
                ? 'card__heading-span--2'
                : 'card__heading-span--3'
            }`}
          >
            {title}
          </span>
        </h4>
        <div className={`shadow-sm`}>
          <ul className="list-none w-[full] mx-auto">
            {features.map((feature, index) => (
              <li
                className={`${
                  index % 2 ? 'bg-gray-100' : ''
                } w-full text-center text-base p-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-grey-darker`}
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`card__side [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] ${
          variant === '1'
            ? `card__side--back-1`
            : variant === '2'
            ? 'card__side--back-2'
            : 'card__side--back-3'
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
          <div className="text-white mb-32 space-y-6">
            <p className="text-sm font-bold uppercase">Only</p>
            <p className="text-6xl font-thin">${price}</p>
          </div>
          <CoolButton onClick={() => {}}>Buy Now</CoolButton>
        </div>
      </div>
    </div>
  )
}

export default Card
