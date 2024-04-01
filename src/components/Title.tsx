type Props = {
  title: string;
};
const Title = ({ title }: Props) => {
  return (
    <h1 className='text-4xl p-10'>{title}</h1>
  )
}

export default Title