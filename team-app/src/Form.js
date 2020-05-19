import React from 'react'

export default function Form(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props
    // debugger

    return (
        <form onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Member</h2>
                <button>submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>General information</h4>
                {/* labels  with innputs below */}
                <label>Name:&nbsp;
<input
                        type='text'
                        placeholder='Type a name'
                        maxLength='30'
                        name='name'

                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>


                <label>Email:&nbsp;
<input
                        type='text'
                        placeholder='Type an email'
                        maxLength='30'
                        name='email'

                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>


                <label>Role:
    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value='' >Select a Role</option>
                        <option value='Backend engineer'>Backend engineer</option>
                        <option value='Frontend engineer'>frontend engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Who knows?'> Who knows?</option>
                    </select>
                </label>
              
            </div>
        </form>
    )
}