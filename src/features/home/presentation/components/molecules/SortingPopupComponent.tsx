import PopupComponent, {
  GeneralPopupProps,
} from '@/shared/presentation/components/molecules/PopupComponent';

const sortingOptions: { name: string }[] = [
  {
    name: 'Best Match',
  },
  {
    name: 'Most Recent',
  },
  {
    name: 'Populer',
  },
];

type Props = GeneralPopupProps;

export default function SortingPopupComponent(props: Props) {
  return (
    <PopupComponent
      id="sorting"
      show={props.show}
      handleClose={() => props.handleClose()}
    >
      <ul className="flex flex-col space-y-3">
        {sortingOptions.map((option, index) => {
          const id = option.name.replaceAll(' ', '');
          return (
            <li
              className="flex w-full justify-between items-center text-sm"
              key={index}
            >
              <label htmlFor={id}>{option.name}</label>
              <input
                id={id}
                type="checkbox"
                onClick={() => props.handleClose()}
              />
            </li>
          );
        })}
      </ul>
    </PopupComponent>
  );
}
