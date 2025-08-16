import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from '../Loader/Loader'

interface PageLoaderProps {
  className?: string
}

export function PageLoader({ className }: PageLoaderProps) {
  return (
    <div className={classNames(cls.page__Loader, {}, [className])}>
      <Loader />
    </div>
  )
}
