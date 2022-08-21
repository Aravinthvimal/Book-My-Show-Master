import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <Disclosure>
    {({ open }) => (
    <>
    <div className="">
        <Disclosure.Button className="py-2 flex items-center gap-3 ">
        {open ? <BiChevronUp /> : <BiChevronDown />}

            <span className={open ? "text-viewcolor-500" : "text-gray-700"}>
                {props.title}
            </span>

        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
            <div className="flex item-center gap-3 flex-wrap">
                {props.tags.map((tag) => (
                <>
                    <div className="border-2 border-gray-200 p-2">
                    <span className="text-red-600">{tag}</span>
                    </div>
                </>
                ))

                }
            </div>
        </Disclosure.Panel>
    </div>
    </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;