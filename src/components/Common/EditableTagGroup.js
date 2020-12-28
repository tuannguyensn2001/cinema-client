// eslint-disable-next-line no-unused-vars
import {React,useState,useRef,useEffect} from 'react';
import {Tag,Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';



function EditableTagGroup(props) {
    const [inputVisible,setInputVisible] = useState(false);
    const input = useRef();


    const renderTag = props.tags.map(tag => {
        return (
            <span key={tag} style={{display: 'inline-block'}}>
                <Tag
                closable
                onClose={event => props.handleClose(tag)}
                >
                    <span>{tag}</span>
                </Tag>

            </span>
        )
    })

    const renderInput = () => {
      if (!inputVisible){
          return(
              <div>
                  <Tag
                      onClick={showInput}
                      style={{
                          border: '1px dotted black',
                      }}
                  >
                     <PlusOutlined/> {props.content}
                  </Tag>
              </div>
          )
      }
        return (
            <div>
                <Input
                    onBlur={event => addNewTag(event.target.value)}
                    onPressEnter={event => addNewTag(event.target.value)}
                    ref={saveInputRef}
                    size='small'
                    style={{
                        width: 78,
                    }}
                />
            </div>
        )


    }

    const showInput = () => {
       setInputVisible(true);
    }

    const saveInputRef = newinput => {
        input.current = newinput;
        if (input.current) {
            input.current.focus();
        }
    }

    const addNewTag = tag => {
        setInputVisible(false);
        if (tag){
            props.handleSubmit(tag);
        }
    }

    return (
        <div>
            <div>
                {renderTag}
            </div>
            <div>
                {renderInput()}
            </div>
        </div>
    )
}

export default EditableTagGroup;